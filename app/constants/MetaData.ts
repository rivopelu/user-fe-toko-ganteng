import { ServerRuntimeMetaDescriptor } from '@remix-run/server-runtime/dist/routeModules';

export const BaseMetaData = (props?: IProps): ServerRuntimeMetaDescriptor[] => {
  return [
    { title: `Toko Ganteng${props?.title ? ' | ' + props.title : ''}` },
    { name: 'description', content: 'Welcome to Toko ganteng' },
  ];
};

interface IProps {
  title?: string;
}
