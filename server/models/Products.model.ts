import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

mongoose.plugin(slug);

// book schema
const schema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      requied: true,
    },
    slug: {
      type: String,
      requied: true,
      unique: true,
      slug: "name",
    },
    summary: {
      type: String,
      requied: true,
    },
    description: {
      type: String,
    },
    featured: {
      type: Boolean,
      default: 0,
    },
    published: {
      type: Date,
      required: true,
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    image: {
      type: String,
    },
    pageCount: Number,
  },
  { timestamps: true }
);

schema.pre("save", function (next) {
  this.slug = this.name.split(" ").join("-");
  next();
});

// book model
export default mongoose.model("Product", schema);
