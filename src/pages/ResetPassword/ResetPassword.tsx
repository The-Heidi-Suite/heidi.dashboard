import { Navigate, useParams } from 'react-router-dom';

import { useVerifyPasswordToken } from '@/api/queries';
import { Spinner } from '@/components/ui/spinner';
import { useTypedTranslation } from '@/hooks';

import ResetForm from './ResetForm';

function ResetPassword() {
  const { t } = useTypedTranslation();
  const { token } = useParams();
  const {
    data: verifyToken,
    isFetching,
    isLoading,
  } = useVerifyPasswordToken(token ?? '');

  if (!token) return <Navigate to={'/unauthorized'} />;
  if (isFetching || isLoading) return <Spinner className="size-8" />;
  
  if (verifyToken?.success) {
    return <ResetForm />;
  }
  return <div>{t('accountSetting.form.websiteLink.error.invalidLink')}</div>;
}

export default ResetPassword;
