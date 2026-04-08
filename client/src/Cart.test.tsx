import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import CartContentItem from './components/CartContentItem'
import { MemoryRouter } from 'react-router-dom'

describe('CartContentItem remove button', () => {

  const mockSetAllCart = vi.fn();

  const mockCart = [
    { product: 'burger', productPrice: 3, options: [], amount: 1, totalPrice: 3, cartId: 'abc' },
    { product: 'fries',  productPrice: 2, options: [], amount: 1, totalPrice: 2, cartId: 'def' },
  ];

  beforeEach(() => {
    // set up localStorage with mock cart before each test
    localStorage.setItem('cart', JSON.stringify(mockCart));
    mockSetAllCart.mockClear();
  });

  test('removes correct item from localStorage when remove button clicked', () => {
    render(
    <MemoryRouter>
      <CartContentItem
        indexToRemove={0}
        setAllCart={mockSetAllCart}
        productName="burger"
        productPrice={3}
        productOptions={[]}
        amount={1}
      />
    </MemoryRouter>
    );
    screen.debug();
    fireEvent.click(screen.getByTestId('remove-btn'));

    const updatedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    expect(updatedCart).toHaveLength(1);
    expect(updatedCart[0].product).toBe('fries'); // burger was removed
  });

  test('calls setAllCart with updated cart after removal', () => {
    render(
    <MemoryRouter>
      <CartContentItem
        indexToRemove={0}
        setAllCart={mockSetAllCart}
        productName="burger"
        productPrice={3}
        productOptions={[]}
        amount={1}
      />
    </MemoryRouter>
    );
    screen.debug();
    fireEvent.click(screen.getByTestId('remove-btn'));

    expect(mockSetAllCart).toHaveBeenCalledTimes(1);
    expect(mockSetAllCart).toHaveBeenCalledWith([mockCart[1]]); // only fries remains
  });

});