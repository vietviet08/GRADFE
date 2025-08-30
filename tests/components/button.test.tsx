import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Test Button</Button>);

    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders button with variant prop', () => {
    render(<Button variant='outline'>Outline Button</Button>);

    const buttonElement = screen.getByText('Outline Button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('border-gray-300');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const buttonElement = screen.getByText('Click Me');
    buttonElement.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
