import { useParams } from 'react-router-dom';

export function ThankYouPage() {
  const { name } = useParams<{ name: string }>();
  return <div> Thanks {name},we will reach out to you shortly </div>;
}
