import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { REGEX } from '@/lib/regexConstant';

type SendVerificationLinkProps = {
  onCancel: () => void;
};

function SendVerificationLink({ onCancel }: SendVerificationLinkProps) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSend = () => {
    if (!REGEX.EMAIL.test(email)) {
      setError(t('registration.form.email.error.invalidMail'));
      return;
    }

    setError('');
    // 👉 Call API or send verification logic here
    console.log('Verification link sent to:', email);
  };

  return (
    <div>
      <Separator className="my-4 " />

      <div>
        <Input
          type="email"
          placeholder={t('email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`border p-3 h-12 shadow-md duration-300 rounded-lg focus:border-primary focus:ring-primary ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      <div className="flex gap-2 mt-4">
        <Button
          variant={'default'}
          className="text-base w-full"
          onClick={handleSend}
        >
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
