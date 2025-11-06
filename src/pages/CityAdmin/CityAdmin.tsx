import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTypedTranslation } from '@/hooks';
import AdminTable from '@/pages/CityAdmin/AdminTable';

function CityAdmin() {
  const { t } = useTypedTranslation();
  return (
    <div className="p-4">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            {t('cityAdministration.heading')}
          </h1>
          <p className="text-muted-foreground">
            {t('cityAdministration.description')}
          </p>
        </div>
        <Button type="button">
          <Plus className="w-4 h-4 mr-2" />
          {t('cityAdministration.createAdmin')}
        </Button>
      </div>
      <div className="mt-8">
        <AdminTable loading={false} />
      </div>
    </div>
  );
}

export default CityAdmin;
