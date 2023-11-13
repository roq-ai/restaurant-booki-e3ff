interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View restaurant information', 'View menus', 'Book a table', 'Edit personal information'],
  ownerAbilities: [
    'Manage restaurant information',
    'Manage restaurant menus',
    'Manage restaurant bookings',
    'Manage user info',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/10665d5d-318f-499c-8571-5a29f5db1a01',
};
