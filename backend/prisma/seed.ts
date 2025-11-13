/*
  Prisma seed script for Real-time Chat
  - Populates users, friendships, conversations, messages, reactions, reads, and a sample call
  - Safe to re-run: uses deleteMany to clear data first (DEV ONLY!)
*/

import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function resetDevData() {
  // Deletion order matters due to FKs
  await prisma.messageReaction.deleteMany();
  await prisma.messageAttachment.deleteMany();
  await prisma.messageRead.deleteMany();
  await prisma.message.deleteMany();

  await prisma.callParticipant.deleteMany();
  await prisma.call.deleteMany();

  await prisma.conversationMember.deleteMany();
  await prisma.conversation.deleteMany();

  await prisma.friends.deleteMany();
  await prisma.friendRequest.deleteMany();
  await prisma.blockedUser.deleteMany();

  await prisma.user.deleteMany();
}

async function main() {
  console.log('Seeding database...');

  // Danger: wipe all existing data (development only)
  await resetDevData();

  // Create users
  const alice = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      username: 'alice',
      displayName: 'Alice',
      passwordHash: 'hashed:alice123',
      isOnline: true,
      avatar: 'https://i.pravatar.cc/100?u=alice',
      lastSeen: new Date(),
    },
  });

  const bob = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      username: 'bob',
      displayName: 'Bob',
      passwordHash: 'hashed:bob123',
      avatar: 'https://i.pravatar.cc/100?u=bob',
      lastSeen: new Date(),
    },
  });

  const charlie = await prisma.user.create({
    data: {
      email: 'charlie@example.com',
      username: 'charlie',
      displayName: 'Charlie',
      passwordHash: 'hashed:charlie123',
      avatar: 'https://i.pravatar.cc/100?u=charlie',
      lastSeen: new Date(),
    },
  });

  // Friend requests and friendships
  await prisma.friendRequest.create({
    data: {
      senderId: alice.id,
      receiverId: bob.id,
      status: 'ACCEPTED',
      message: "Let's be friends!",
    },
  });

  // Represent mutual friendship with two rows (user -> friend and friend -> user)
  await prisma.friends.createMany({
    data: [
      { userId: alice.id, friendId: bob.id },
      { userId: bob.id, friendId: alice.id },
    ],
    skipDuplicates: true,
  });

  // Direct conversation between Alice and Bob
  const directConversation = await prisma.conversation.create({
    data: {
      type: 'DIRECT',
      lastMessageAt: new Date(),
      members: {
        create: [
          { userId: alice.id, role: 'MEMBER' },
          { userId: bob.id, role: 'MEMBER' },
        ],
      },
    },
    include: { members: true },
  });

  // Group conversation among Alice, Bob, Charlie
  const groupConversation = await prisma.conversation.create({
    data: {
      type: 'GROUP',
      name: 'Project Team',
      avatar: 'https://i.pravatar.cc/150?u=group1',
      createdBy: alice.id,
      members: {
        create: [
          { userId: alice.id, role: 'ADMIN' },
          { userId: bob.id, role: 'MEMBER' },
          { userId: charlie.id, role: 'MEMBER' },
        ],
      },
    },
    include: { members: true },
  });

  // Messages in direct conversation
  const msg1 = await prisma.message.create({
    data: {
      conversationId: directConversation.id,
      senderId: alice.id,
      type: 'TEXT',
      content: "Hey Bob, how's it going? 👋",
    },
  });

  const msg2 = await prisma.message.create({
    data: {
      conversationId: directConversation.id,
      senderId: bob.id,
      type: 'TEXT',
      content: 'All good! Check out this photo.',
      replyToId: msg1.id,
      attachments: {
        create: [
          {
            type: 'IMAGE',
            url: 'https://picsum.photos/seed/chat/800/600',
            thumbnailUrl: 'https://picsum.photos/seed/chat/200/150',
            width: 800,
            height: 600,
            fileName: 'photo.jpg',
            mimeType: 'image/jpeg',
            fileSize: 123456,
          },
        ],
      },
    },
  });

  // Reaction and read receipts
  await prisma.messageReaction.create({
    data: {
      messageId: msg1.id,
      userId: bob.id,
      emoji: '👍',
    },
  });

  await prisma.messageRead.createMany({
    data: [
      { messageId: msg1.id, userId: bob.id },
      { messageId: msg2.id, userId: alice.id },
    ],
    skipDuplicates: true,
  });

  // A sample call in the group conversation
  const call = await prisma.call.create({
    data: {
      conversationId: groupConversation.id,
      initiatorId: alice.id,
      type: 'VIDEO',
      status: 'ONGOING',
      startedAt: new Date(Date.now() - 2 * 60 * 1000), // started 2 mins ago
      participants: {
        create: [
          {
            userId: alice.id,
            status: 'JOINED',
            joinedAt: new Date(),
          },
          {
            userId: bob.id,
            status: 'JOINED',
            joinedAt: new Date(),
          },
          { userId: charlie.id, status: 'RINGING' },
        ],
      },
    },
  });

  console.log('Seeded users:', {
    alice: alice.id,
    bob: bob.id,
    charlie: charlie.id,
  });
  console.log('Direct conversation:', directConversation.id);
  console.log('Group conversation:', groupConversation.id);
  console.log('Messages:', { msg1: msg1.id, msg2: msg2.id });
  console.log('Call:', call.id);
  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error('Seeding failed:', e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
