/**
 * Toast Notification Helper
 * JavaScript utilities for react-hot-toast
 * 
 * Usage:
 * import { showToast } from './components/toast-helper.js';
 * 
 * showToast.success('Plan saved!');
 * showToast.error('Something went wrong');
 * showToast.info('Processing...');
 * showToast.loading('Calculating...');
 */

import toast from 'react-hot-toast';

// Toast configuration
const toastConfig = {
    duration: 3000,
    position: 'bottom-right',
    style: {
        background: 'var(--color-bg-card)',
        color: 'var(--color-text-primary)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-elevated)',
        padding: '1rem 1.25rem',
        fontSize: 'var(--font-size-body)',
        fontWeight: '500',
        border: '1px solid var(--color-border)',
    },
};

// Success toast
export const showSuccess = (message) => {
    return toast.success(message, {
        ...toastConfig,
        icon: '✓',
        style: {
            ...toastConfig.style,
            borderLeft: '3px solid var(--color-success)',
        },
    });
};

// Error toast
export const showError = (message) => {
    return toast.error(message, {
        ...toastConfig,
        icon: '✗',
        style: {
            ...toastConfig.style,
            borderLeft: '3px solid var(--color-danger)',
        },
    });
};

// Info toast
export const showInfo = (message) => {
    return toast(message, {
        ...toastConfig,
        icon: 'ℹ',
        style: {
            ...toastConfig.style,
            borderLeft: '3px solid var(--color-primary)',
        },
    });
};

// Loading toast
export const showLoading = (message) => {
    return toast.loading(message, {
        ...toastConfig,
        style: {
            ...toastConfig.style,
            borderLeft: '3px solid var(--color-primary)',
        },
    });
};

// Promise toast (auto-updates based on promise state)
export const showPromise = (promise, messages) => {
    return toast.promise(
        promise,
        {
            loading: messages.loading || 'Loading...',
            success: messages.success || 'Success!',
            error: messages.error || 'Error occurred',
        },
        toastConfig
    );
};

// Dismiss toast
export const dismissToast = (toastId) => {
    toast.dismiss(toastId);
};

// Dismiss all toasts
export const dismissAllToasts = () => {
    toast.dismiss();
};

// Export as default object
export const showToast = {
    success: showSuccess,
    error: showError,
    info: showInfo,
    loading: showLoading,
    promise: showPromise,
    dismiss: dismissToast,
    dismissAll: dismissAllToasts,
};

export default showToast;
