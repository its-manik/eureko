export default {
  name: "chatbotProduct",
  title: "Product Page Left Right Images Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "imageUrl",
      title: "Image URL",
      type: "image",
      options: {
        hotspot: true, // Enables image cropping
      },
    },
  ],
};
