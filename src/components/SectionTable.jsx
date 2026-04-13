export default function SectionTable({ headers, children }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="border-b border-slate-200 bg-white text-slate-500">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.08em]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}