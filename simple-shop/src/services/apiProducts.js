import supabase, { supabaseUrl } from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }

  return data;
}

export async function createEditProduct(newProduct, id) {
  const hasImagePath = newProduct.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newProduct.image.name}`
    .replaceAll("/", "")
    .replaceAll(" ", "");

  const imagePath = hasImagePath
    ? newProduct.image
    : `${supabaseUrl}/storage/v1/object/public/product-images/${imageName}`;

  //1.Create product
  let query = supabase.from("products");

  //Create
  if (!id) query = query.insert([{ ...newProduct, image: imagePath }]);

  //Edit
  if (id)
    query = query
      .update({ ...newProduct, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Products could not be created");
  }

  //2.Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("product-images")
    .upload(imageName, newProduct.image);

  //3.Delete the product IF there was an error uploading image
  if (storageError) {
    await supabase.from("products").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Products image can not be uploaded and the product was not created"
    );
  }
  return data;
}
