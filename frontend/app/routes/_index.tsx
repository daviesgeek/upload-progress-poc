import type { MetaFunction } from "@remix-run/node";
import { useFormik } from "formik";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [progress, setProgress] = useState(0);

  const { setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      file: null as File | null,
    },
    onSubmit: (values) => {
      console.log({ values });
      if (!values.file) return;

      const formData = new FormData();
      formData.append("file", values.file);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/upload");
      xhr.upload.onprogress = (event) => {
        console.log(event.loaded, event.total);
        setProgress((event.loaded / event.total) * 100);
      };
      xhr.send(formData);
    },
  });

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Upload with Progress PoC</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          onChange={({ currentTarget }) => {
            currentTarget.files &&
              setFieldValue("file", currentTarget.files[0]);
          }}
        />
        <button type="submit">Upload</button>
        <br />
        <progress value={progress} max="100" />
      </form>
    </div>
  );
}
