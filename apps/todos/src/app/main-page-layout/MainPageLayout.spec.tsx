import { render, RenderResult, screen } from '@testing-library/react';

import MainPageLayout from './MainPageLayout';

describe('Given MainPageLayout', () => {
  describe('When enviornment is valid', () => {
    let component: RenderResult;

    beforeEach(() => {
      component = render(
        <MainPageLayout>
          <></>
        </MainPageLayout>
      );
    });
    it('Then component should render successfully', () => {
      const { baseElement } = component;
      expect(baseElement).toBeTruthy();
    });

    it('Then component should have correct title', () => {
      expect(screen.getByText("Todo's")).toBeDefined();
    });
  });
});
