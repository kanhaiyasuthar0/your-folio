import React from "react";
import Link from "next/link";
import ShowCase from "@/database/mongodb/models/showcase/showcase.schema";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import dbConnect from "@/database/mongodb/connections/dbConnect";
import { formatDistanceToNow } from "date-fns";
import Button from "@/components/generics/Button";
import { revalidatePath } from "next/cache";

const FolioItemCard = ({ data }: any) => {
  const { id, projectName, description, images, createdAt } = data;

  console.log("🚀 ~ FolioItemCard ~ description:", description);
  console.log("🚀 ~ FolioItemCard ~ projectName:", projectName);
  console.log("🚀 ~ FolioItemCard ~ id:", id);
  console.log("🚀 ~ FolioItemCard ~ images:", images);
  // const [likes, setLikes] = useState(0);
  // const [dislikes, setDislikes] = useState(0);

  // Handle like and dislike actions
  // const handleLike = () => setLikes(likes + 1);
  // const handleDislike = () => setDislikes(dislikes + 1);
  async function deleteFolio(formData: FormData) {
    "use server";
    const response = await ShowCase.deleteOne({ _id: id });
    console.log("🚀 ~ deleteFolio ~ response:", response);
    revalidatePath("/admin/folio");
    revalidatePath("/showcase");
    return "";
  }
  return (
    <div
      key={id}
      className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      <div className="relative w-full h-48">
        <Image
          src={images[0] || "/default-image.jpg"}
          alt={projectName}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{projectName}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-4">
          Posted {formatDistanceToNow(new Date(createdAt))} ago
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <button
              // onClick={handleLike}
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              👍 <span>{1}</span>
            </button>
            <button
              // onClick={(}
              className="flex items-center gap-1 text-red-600 hover:text-red-800"
            >
              👎 <span>{2}</span>
            </button>
          </div>
          <>
            <Link
              href={`/showcase/${id}`}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Read more...
            </Link>
          </>

          <form action={deleteFolio}>
            <Button text="Delete" />
          </form>
        </div>
      </div>
    </div>
  );
};

const Folio = async () => {
  await dbConnect();
  const user = await currentUser();
  console.log("🚀 ~ Folio ~ user:", user);
  const folioItems = await ShowCase.find({ user: user?.id });
  console.log("🚀 ~ Folio ~ folioItems:", folioItems);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Folios</h1>
        <>
          <Link
            href="/admin/folio/add"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Folio
          </Link>
        </>
      </div>

      {folioItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {folioItems.map((item) => (
            <FolioItemCard key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No folio items found.</div>
      )}
    </div>
  );
};

export default Folio;
