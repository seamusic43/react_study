
export const JoinProperty = [
    { 'name': 'id', 'type': 'text', 'placeholder': 'enter the id', required: true, minlength: 6, maxlength: 20 },
    { 'name': 'password', 'type': 'password', 'placeholder': 'enter the password', required: true, minlength: 8, maxlength: 20, pattern: '^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$' },
    { 'name': 'email', 'type': 'email', 'placeholder': 'enter the email', required: true, pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$' }, //'^([\\.w-]+(?:\\.[\\.w-]+)*)@((?:[\\.w-]+\\.)*\\.w[\\.w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$' },
    { 'name': 'phone', 'type': 'tel', 'placeholder': 'enter the phone number', required: true, pattern: '^01(?:0|1|[6-9])(?:\\.{3}|\\.{4})\\.{4}$', },
    { 'name': 'company_name', 'type': 'text', 'placeholder': 'enter the company name', required: true, minlength: 2, maxlength: 20 },
    { 'name': 'business_number', 'type': 'text', 'placeholder': 'enter the business number', required: true, pattern: '^([0-9]{3})-([0-9]{2})-([0-9]{5})$', minlength: 12, maxlength: 12 },
    { 'name': 'all_agree', 'type': 'checkbox', 'label': 'All agree' },
    { 'name': 'service_agree', 'type': 'checkbox', 'label': 'Service agree', required: true },
    { 'name': 'privacy_agree', 'type': 'checkbox', 'label': 'Privacy agree', required: true },
    { 'name': 'promotion_agree', 'type': 'checkbox', 'label': 'Promotion agree', },
    { 'name': 'receive_agree', 'group': [{ 'name': 'receive_email', 'type': 'checkbox', 'label': 'Receive email agree', }, { 'name': 'receive_sms', 'type': 'checkbox', 'label': 'Receive sms agree', }] },
];