import React from "react";

interface Record {
  _id: string;
  fileId: string;
  matchedWords: string[];
}

interface DashboardProps {
  records: Record[];
}

const Dashboard: React.FC<DashboardProps> = ({ records }) => {
  return (
    <div>
      <h1>Matched Records</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>File</th>
            <th>Matched Words</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record._id}>
              <td>{record._id}</td>
              <td>
                <a href={`/api/download/${record.fileId}`}>Download</a>
              </td>
              <td>{record.matchedWords.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
