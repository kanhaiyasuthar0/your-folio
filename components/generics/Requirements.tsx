const RequirementsTable = (props: {
  requirements: {
    site: string;
    status: string;
    type: string;
    place: string;
    date?: string;
    publishDate: string;
    estimatedCompletion: string;
    expectedDelivery: string;
  }[];
}) => {
  const { requirements } = props;
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Site
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Type
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Place
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Publish Date
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Estimated Completion
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Expected Delivery
            </th>
          </tr>
        </thead>
        <tbody>
          {requirements.map((req, index) => (
            <tr key={index}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {req.site}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {req.type}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {req.place}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {req.publishDate}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {req.estimatedCompletion}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {req.expectedDelivery}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequirementsTable;
