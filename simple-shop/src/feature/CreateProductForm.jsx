import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import FileInput from "../ui/FileInput";
import FormRow from "../ui/FormRow";
import Form from "../ui/Form";
import { useCreateProduct } from "./useCreateProduct";
import { useEditProduct } from "./useEditProduct";

function CreateProductForm({ productToEdit = {}, onCloseModal }) {
  const {
    id: editId,
    width: editWidth,
    height: editHeight,
    ...editValues
  } = productToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession
      ? { ...editValues, width: editWidth, height: editHeight }
      : {},
  });
  const { errors } = formState;
  const { isCreating, createProduct } = useCreateProduct();
  const { editProduct, isEditing } = useEditProduct();
  const isWorking = isEditing || isCreating;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    const productData = {
      name: data.name,
      count: data.count,
      weight: data.weight,
      image,
      size: {
        width: data.width,
        height: data.height,
      },
    };

    console.log(productData);
    if (isEditSession) {
      editProduct(
        { newProductData: productData, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createProduct(productData, {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Product name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Count" error={errors?.count?.message}>
        <Input
          type="number"
          id="count"
          disabled={isCreating}
          {...register("count", {
            required: "This field is required",
            min: {
              value: 0,
              message: "Count must be positive or 0",
            },
          })}
        />
      </FormRow>
      <FormRow label="Weight" error={errors?.weight?.message}>
        <Input
          type="number"
          id="weight"
          step="0.01"
          disabled={isCreating}
          {...register("weight", {
            required: "This field is required",
            min: {
              value: 0.001,
              message: "Weight should be more than 0",
            },
          })}
        />
      </FormRow>
      <FormRow label="Width" error={errors?.width?.message}>
        <Input
          type="number"
          id="width"
          step="0.01"
          disabled={isCreating}
          {...register("width", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Height" error={errors?.height?.message}>
        <Input
          type="number"
          id="height"
          step="0.01"
          disabled={isCreating}
          {...register("height", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Product photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("image", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add product</Button>
      </FormRow>
    </Form>
  );
}

export default CreateProductForm;
