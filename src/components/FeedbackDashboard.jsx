const FeedbackDashboard = ({ data }) => (
    <div className="overflow-x-auto mt-8 rounded-lg shadow-md">
        <table className="min-w-full table-auto border border-gray-200">
            <thead>
                <tr className="bg-gradient-to-r from-gray-100 to-gray-200 text-xs text-gray-600 uppercase tracking-wider">
                    <th className="px-4 py-3 border">Name</th>
                    <th className="px-4 py-3 border">Email</th>
                    <th className="px-4 py-3 border">Feedback</th>
                    <th className="px-4 py-3 border">Visit Frequency</th>
                    <th className="px-4 py-3 border">Recommend</th>
                    <th className="px-4 py-3 border">Suggestions</th>
                    <th className="px-4 py-3 border">Follow Up</th>
                    <th className="px-4 py-3 border">Food Rating</th>
                    <th className="px-4 py-3 border">Service Rating</th>
                    <th className="px-4 py-3 border">Experience Rating</th>
                </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
                {data.map((item, idx) => (
                    <tr
                        key={idx}
                        className="text-center hover:bg-gray-100 even:bg-gray-50 transition duration-200 ease-in-out"
                    >
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
