import * as Gql from '@/graphql/index';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  const { data, error, isLoading } = Gql.useGetAllUsersQuery({
    filter: {},
    paging: {},
    sorting: [],
  });
  console.log(data, error, isLoading);

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
