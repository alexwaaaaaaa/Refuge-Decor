import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders logo', () => {
    render(<Navbar />);
    expect(screen.getByText('Refuge Decor')).toBeInTheDocument();
  });

  it('has accessible navigation', () => {
    render(<Navbar />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});
