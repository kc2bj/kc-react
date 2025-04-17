import { useWork } from '../hooks/useWork';

export default function WorkList() {
  const { data, loading } = useWork();

  if (loading) return <p>Loading portfolio...</p>;

  return (
    <div className="work-grid">
      {data.map((item) => (
        <div key={item.id} className="work-card">
          <h2>{item.attributes.title}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: item.attributes.field_description?.processed,
            }}
          />
        </div>
      ))}
    </div>
  );
}
