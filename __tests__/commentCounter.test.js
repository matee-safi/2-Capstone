import commentCounter from '../src/modules/commentCounter';

const comments = [
  {
    comment: 'My comment',
    creation_date: '2023-03-23',
    username: 'User2',
  },
  {
    comment: 'My comment',
    creation_date: '2023-03-23',
    username: 'User2',
  },
  {
    comment: 'My comment',
    creation_date: '2023-03-23',
    username: 'User2',
  },
];

test('counter should return 3', () => {
  expect(commentCounter(comments)).toStrictEqual(3);
});
