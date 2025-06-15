import { Form, redirect, useActionData, useNavigation } from "react-router";
import { isRequiredCheck, isImageValid } from '../../utils/validations';

export default function CourseForm({ method, data }) {

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const errors = useActionData();

  return (
    <Form method={method}>
      <div>
        <label htmlFor="title">Email:</label>
        <input type="text" name="title" id="title" required defaultValue={data ? data.title : ""} />
        {errors && errors.title && <p>{errors.title}</p>}
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="text" name="image" id="image" required defaultValue={data ? data.image : ""} />
        {errors && errors.image && <p>{errors.image}</p>}
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea name="description" rows={5} required defaultValue={data ? data.description : ""}></textarea>
        {errors && errors.description && <p>{errors.description}</p>}
      </div>
      <button disabled={isSubmitting} type="submit">{isSubmitting ? "Kayıt Ediliyor" : "Kaydet"}</button>
    </Form>
  )
}

export async function courseAction({request, params}){

  const data = await request.formData();

  const method = request.method;

  let url = "http://localhost:5000/courses";

  if (method === "PUT") {
    const courseid = params.courseid;
    url = url + "/" + courseid;
  }

  const formData = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description")
  };

  const errors = {};

  if (!isRequiredCheck(formData.title)) {
    errors.title = "Title alanı zorunludur.";
  }

  if (!isImageValid(formData.image)) {
    errors.image = "Image alanı zorunludur ve uzantısı .jpg, .jpeg veya .png olmalıdır.";
  }

  if (!isRequiredCheck(formData.description)) {
    errors.description = "Description alanı zorunludur.";
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  const response = await fetch(url, {
    method: method,
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(formData)
  });

  if (response.ok) {
    return redirect("/courses");
  }
}