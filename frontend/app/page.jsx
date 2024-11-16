// page.jsx (or wherever you want to use it)
import QueryWrapper from './QueryWrapper';
import Home from './Home';

export default function Page() {
  return (
    <QueryWrapper>
      <Home />
    </QueryWrapper>
  );
}
