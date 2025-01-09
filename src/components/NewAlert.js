import { toast } from 'react-toastify';

const bgColors = {
  success: 'success',
  error: 'error',
  warning: 'warning',
};

const notify = (message, bgcolor, duration = 2000) => {
  console.log('Notify chamado com:', { message, bgcolor, duration });
  toast?.[bgColors[bgcolor]](message, {
    position: 'top-right',
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export default notify;
