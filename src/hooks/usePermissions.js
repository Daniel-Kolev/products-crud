import { useEffect, useState } from 'react';
import API from 'api/responses';

const defaultPermissions = {
  create: false,
  read: false,
  update: false,
  delete: false,
};

const usePermissions = () => {
  const [permissions, setPermissions] = useState(defaultPermissions);

  useEffect(() => {
    fetch(API.PERMISSIONS)
      .then((response) => response.json())
      .then((json) => {
        const adaptedPermissions = json.permissions.reduce((newPermissions, permission) => {
          // eslint-disable-next-line no-param-reassign
          newPermissions[permission.toLowerCase()] = true;
          return newPermissions;
        }, { ...defaultPermissions });

        setPermissions(adaptedPermissions);
      })
      .catch((error) => {
        setPermissions(defaultPermissions);
        window.alert('An error occurred while fetching permissions. Please refresh the page.');
        console.error('Error when fetching permissions:', error);
      });
  }, []);

  return permissions;
};

export default usePermissions;
