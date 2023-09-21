import mongoose from "mongoose";
// import slug from "mongoose-slug-generator";

// mongoose.plugin(slug);

// book schema
const schema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      requied: true,
    },
    // slug: {
    //   type: String,
    //   requied: true,
    //   unique: true,
    //   slug: "name",
    // },
    description: {
      type: String,
    },
    parent_id: {
      type: Number,
      default: null,
    },
    featured: {
      type: Boolean,
      default: 0,
    },
    menu: {
      type: Boolean,
      default: 1,
    },
    // image: {
    //   type: String,
    // },
    pageCount: Number,
  },
  { timestamps: true }
);

// schema.pre("save", function (next) {
//   this.slug = this.name.split(" ").join("-");
//   next();
// });

// book model
export default mongoose.model("Category", schema);
