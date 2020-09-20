
// NOTE: original code from https://testing-library.com/docs/svelte-testing-library/example
// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
// import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom';

import Component from '../src/Component.svelte';

describe('Component', () => {
  it('shows proper heading when rendered', () => {
    const { getByText } = render(Component, { name: 'World' })

    expect(getByText('Hello World!')).toBeInTheDocument()
  });

  // Note: This is as an async test as we are using `fireEvent`
  it('changes button text on click', async () => {
    const { getByText } = render(Component, { name: 'World' })
    const button = getByText('Button')

    // Using await when firing events is unique to the svelte testing library because
    // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
    await fireEvent.click(button)

    expect(button).toHaveTextContent('Button Clicked')
  });
});

// import { render } from '@testing-library/svelte';
// import '@testing-library/jest-dom';

// import Image from '../src/index';

// describe('Image', () => {
//   describe('includes a source tag', () => {
//     it('with default attributes', () => {
//       const { getByTestId } = render(Image);
//       const source = getByTestId('source');
//       expect(source).toHaveAttribute('srcSet', 'default@254.webp 254w, default@338.webp 338w, default@389.webp 389w, default@518.webp 518w, default@676.webp 676w, default@777.webp 777w, default@892.webp 892w, default@960.webp 960w, default@1036.webp 1036w, default@1280.webp 1280w, default@1338.webp 1338w, default@1382.webp 1382w, default@1784.webp 1784w, default@1920.webp 1920w, default@2560.webp 2560w')
//       expect(source).toHaveAttribute('sizes', '(max-width: 992px) 893px, (max-width: 768px) 691px, (max-width: 576px) 518px, (max-width: 375px) 338px, 1280px');
//       expect(source).toHaveAttribute('type', 'image/webp');
//     });

//     describe('with proper srcSet', () => {
//       it('when different name', () => {
//         const { getByTestId } = render(Image, {name: 'hello'});
//         const source = getByTestId('source');
//         expect(source).toHaveAttribute('srcSet', 'hello@254.webp 254w, hello@338.webp 338w, hello@389.webp 389w, hello@518.webp 518w, hello@676.webp 676w, hello@777.webp 777w, hello@892.webp 892w, hello@960.webp 960w, hello@1036.webp 1036w, hello@1280.webp 1280w, hello@1338.webp 1338w, hello@1382.webp 1382w, hello@1784.webp 1784w, hello@1920.webp 1920w, hello@2560.webp 2560w');
//       });
    
//       it('when different widths', () => {
//         const { getByTestId } = render(Image, {widths: [1, 2]});
//         const source = getByTestId('source');
//         expect(source).toHaveAttribute('srcSet', 'default@1.webp 1w, default@2.webp 2w');
//       });
    
//       it('when no widths', () => {
//         const { getByTestId } = render(Image, {widths: []});
//         const source = getByTestId('source');
//         expect(source).not.toHaveAttribute('srcSet');
//       });
//     });

//     describe('with proper sizes', () => {
//       it('when different sizes', () => {
//         const { getByTestId } = render(Image, {sizes: [[10, 0.1]]});
//         const source = getByTestId('source');
//         expect(source).toHaveAttribute('sizes', '(max-width: 10px) 1px, 1280px');
//       });

//       it('when no sizes', () => {
//         const { getByTestId } = render(Image, {sizes: []});
//         const source = getByTestId('source');
//         expect(source).toHaveAttribute('sizes', '1280px');
//       });

//       it('when different largestImageSize', () => {
//         const { getByTestId } = render(Image, {largestImageSize: 1000});
//         const source = getByTestId('source');
//         expect(source).toHaveAttribute('sizes', '(max-width: 992px) 893px, (max-width: 768px) 691px, (max-width: 576px) 518px, (max-width: 375px) 338px, 1000px');
//       })

//       it('when null largestImageSize', () => {
//         const { getByTestId } = render(Image, {largestImageSize: null});
//         const source = getByTestId('source');
//         expect(source).toHaveAttribute('sizes', '(max-width: 992px) 893px, (max-width: 768px) 691px, (max-width: 576px) 518px, (max-width: 375px) 338px');
//       })
//     });
//   });

//   describe('includes an img tag', () => {
//     it('with default attributes', () => {
//       const { getByTestId } = render(Image);
//       const img = getByTestId('img');
//       expect(img).toHaveAttribute('srcSet', 'default@254.jpg 254w, default@338.jpg 338w, default@389.jpg 389w, default@518.jpg 518w, default@676.jpg 676w, default@777.jpg 777w, default@892.jpg 892w, default@960.jpg 960w, default@1036.jpg 1036w, default@1280.jpg 1280w, default@1338.jpg 1338w, default@1382.jpg 1382w, default@1784.jpg 1784w, default@1920.jpg 1920w, default@2560.jpg 2560w');
//       expect(img).toHaveAttribute('sizes', '(max-width: 992px) 893px, (max-width: 768px) 691px, (max-width: 576px) 518px, (max-width: 375px) 338px, 1280px');
//       expect(img).toHaveAttribute('src', 'default@676.jpg');
//       expect(img).toHaveAttribute('alt', '');
//       expect(img).not.toHaveAttribute('class');
//     });

//     describe('with proper srcSet', () => {
//       it('when different name', () => {
//         const { getByTestId } = render(Image, {name: 'hello'});
//         const img = getByTestId('img');
//         expect(img).toHaveAttribute('srcSet', 'hello@254.jpg 254w, hello@338.jpg 338w, hello@389.jpg 389w, hello@518.jpg 518w, hello@676.jpg 676w, hello@777.jpg 777w, hello@892.jpg 892w, hello@960.jpg 960w, hello@1036.jpg 1036w, hello@1280.jpg 1280w, hello@1338.jpg 1338w, hello@1382.jpg 1382w, hello@1784.jpg 1784w, hello@1920.jpg 1920w, hello@2560.jpg 2560w');
//       });
    
//       it('when different widths', () => {
//         const { getByTestId } = render(Image, {widths: [1, 2]});
//         const img = getByTestId('img');
//         expect(img).toHaveAttribute('srcSet', 'default@1.jpg 1w, default@2.jpg 2w');
//       });
    
//       it('when no widths', () => {
//         const { getByTestId } = render(Image, {widths: []});
//         const img = getByTestId('img');
//         expect(img).not.toHaveAttribute('srcSet');
//       });
//     });

//     describe('with proper sizes', () => {
//       it('when different sizes', () => {
//         const { getByTestId } = render(Image, {sizes: [[10, 0.1]]});
//         const img = getByTestId('img');
//         expect(img).toHaveAttribute('sizes', '(max-width: 10px) 1px, 1280px');
//       });

//       it('when no sizes', () => {
//         const { getByTestId } = render(Image, {sizes: []});
//         const img = getByTestId('img');
//         expect(img).toHaveAttribute('sizes', '1280px');
//       });

//       it('when different largestImageSize', () => {
//         const { getByTestId } = render(Image, {largestImageSize: 1000});
//         const img = getByTestId('img');
//         expect(img).toHaveAttribute('sizes', '(max-width: 992px) 893px, (max-width: 768px) 691px, (max-width: 576px) 518px, (max-width: 375px) 338px, 1000px');
//       })

//       it('when null largestImageSize', () => {
//         const { getByTestId } = render(Image, {largestImageSize: null});
//         const img = getByTestId('img');
//         expect(img).toHaveAttribute('sizes', '(max-width: 992px) 893px, (max-width: 768px) 691px, (max-width: 576px) 518px, (max-width: 375px) 338px');
//       })
//     });
//   });
// });