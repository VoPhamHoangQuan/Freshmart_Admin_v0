import mongoose from "mongoose";

const schema = mongoose.Schema(
    {
        comments: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Users",
                    require: false,
                },
                message: {
                    type: String,
                    require: false,
                },
                rate: {
                    type: Number,
                    require: false,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const CommentsModel = mongoose.model("Comment", schema);
