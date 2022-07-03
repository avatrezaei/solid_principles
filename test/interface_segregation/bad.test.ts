import { Eagle } from '../../interface_segregation/bad/eagle';
import { Penguin } from '../../interface_segregation/bad/penguin';

test('egle test', () => {
     const eagle = new Eagle();
     expect(eagle.molt()).toBe('eagle molt');
     expect(eagle.fly()).toBe('eagle fly');
});

test('penguin test', () => {
     const penguin = new Penguin();
     expect(penguin.swim()).toBe('penguin swim');
     expect(penguin.molt()).toBe('penguin molt');
});

