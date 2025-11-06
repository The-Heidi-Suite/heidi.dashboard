import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

type SendVerificationLinkProps = {
  onCancel: () => void;
};

function SendVerificationLink({ onCancel }: SendVerificationLinkProps) {
  const { t } = useTranslation();
  return (
    <div>
      <Separator className="my-4 " />

      <Input
        type="email"
        placeholder={t('email')}
        className="border p-3 h-12 shadow-md duration-300 border-gray-300 rounded-lg focus:border-primary focus:ring-primary"
      />

      <div className="flex gap-2 mt-4">
        <Button variant={'default'} className="text-base w-full">
          {t('sendLink')}
        </Button>
        <Button
          variant={'outline'}
          onClick={onCancel}
          className="w-full hover:bg-red-500 border-red-500 text-base"
        >
          {t('cancel')}
        </Button>
      </div>
    </div>
  );
}

export default SendVerificationLink;
