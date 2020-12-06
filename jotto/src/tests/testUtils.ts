import { ShallowWrapper } from 'enzyme';

export const findByTestAttribute = (wrapper: ShallowWrapper, value: string) =>
  wrapper.find(`[data-test="${value}"]`);
