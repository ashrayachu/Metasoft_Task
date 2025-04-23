const FeedbackDashboard = ({ data }) => (
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full table-auto border">
        <thead>
          <tr className="bg-gray-200 text-sm">
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Feedback</th>
            <th className="px-4 py-2 border">Visit Frequency</th>
            <th className="px-4 py-2 border">Recommend</th>
            <th className="px-4 py-2 border">Suggestions</th>
            <th className="px-4 py-2 border">Follow Up</th>
            <th className="px-4 py-2 border">Food Rating</th>
            <th className="px-4 py-2 border">Service Rating</th>
            <th className="px-4 py-2 border">Experience Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="text-center text-sm hover:bg-gray-100">
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.email}</td>
              <td className="border px-4 py-2">{item.feedback}</td>
              <td className="border px-4 py-2">{item.visitFrequency || '-'}</td>
              <td className="border px-4 py-2">{item.recommend || '-'}</td>
              <td className="border px-4 py-2">{item.suggestions || '-'}</td>
              <td className="border px-4 py-2">{item.followup ? 'Yes' : 'No'}</td>
              <td className="border px-4 py-2">{item.ratings?.food ?? '-'}</td>
              <td className="border px-4 py-2">{item.ratings?.service ?? '-'}</td>
              <td className="border px-4 py-2">{item.ratings?.experience ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default FeedbackDashboard;
  