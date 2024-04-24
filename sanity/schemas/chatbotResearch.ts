export default {
  name: "chatbotResearch",
  title: "Research Page Left Right Image Sections",
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
