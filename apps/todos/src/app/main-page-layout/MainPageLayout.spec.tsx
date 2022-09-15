import { render } from '@testing-library/react';

import MainPageLayout from './MainPageLayout';

describe('MainPageLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MainPageLayout>
        <></>
      </MainPageLayout>
    );
    expect(baseElement).toBeTruthy();
  });
});
