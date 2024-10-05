import { Chip } from '@mui/material';

export const RoleTag = ({ roleId }) => {
  if (roleId === 1) {
    return <AdminRole />;
  } else {
    return <OfficeRole />;
  }
};

const AdminRole = () => {
  return <Chip label="Administrator" color="secondary" size="medium" variant="filled" />;
};

const OfficeRole = () => {
  return <Chip label="office user" color="primary" size="medium" variant="filled" />;
};
