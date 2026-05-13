const statusStyles = {
    Applied: "bg-blue-100 text-blue-700 border border-blue-200",
    "In Review": "bg-yellow-100 text-yellow-700 border border-yellow-200",
    Rejected: "bg-red-100 text-red-700 border border-red-200",
    Accepted: "bg-emerald-100 text-emerald-700 border border-emerald-200",
};

const StatusBadge = ({ status }) => {
    const styles = statusStyles[status] || "bg-gray-100 text-gray-700 border border-gray-200";

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles}`}>
            {status}
        </span>
    );
};

export default StatusBadge;
