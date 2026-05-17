import Menu from '@/src/components/Menu';
import PageTransition from '@/src/components/PageTransition';

export default function MenuPage() {
  return (
    <PageTransition>
      <div className="pt-24">
        <Menu />
      </div>
    </PageTransition>
  );
}
