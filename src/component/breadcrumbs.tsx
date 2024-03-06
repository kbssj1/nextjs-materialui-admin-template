import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

interface Breadcrumb {
  label: string;
  href: string;
  active: boolean;
}

export default function BreadcrumbComp({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.length > 0 &&  
        breadcrumbs.map((breadcrumb:Breadcrumb, index) => (
          breadcrumb.active === true ? 
          <Link key={index} underline="hover" color="inherit" href={breadcrumb.href}>
            {breadcrumb.label}
          </Link> :
          <Typography key={index} color="text.primary">
            {breadcrumb.label}
          </Typography>
        ))
      }
    </Breadcrumbs>
  );
}
