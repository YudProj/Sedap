import PageHeader from "../components/PageHeader";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        breadcrumb={["Dashboard", "Order List"]}
      >
        <button className="bg-hijau text-white px-4 py-2 rounded-lg">
          Add Button
        </button>
      </PageHeader>
    </div>
  );
}
