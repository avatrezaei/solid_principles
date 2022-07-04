 

 import { Eagle } from '../../liskov_substitution/good/eagle';
 import { Penguin } from '../../liskov_substitution/good/penguin';
 
 test('bad test', () => {
      const eagle = new Eagle("john");
      const penguin = new Penguin("helen");
      expect(eagle.run()).toBe('john is running');
      expect(eagle.fly()).toBe('john is flying');
 
      expect(penguin.run()).toBe('helen is running');
 });