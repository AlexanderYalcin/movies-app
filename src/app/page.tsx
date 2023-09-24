import uiStyles from '@/styles/ui.module.scss';
import List from '@/app/components/List';

export default async function Home() {
  return (
    <div>
      <h1 className={uiStyles.movieHeading}>Trending</h1>
      <List limit={2} />
    </div>
  );
}
