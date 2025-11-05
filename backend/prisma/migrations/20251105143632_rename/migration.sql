/*
  Warnings:

  - You are about to drop the column `blockedId` on the `blocked_users` table. All the data in the column will be lost.
  - You are about to drop the column `blockerId` on the `blocked_users` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `blocked_users` table. All the data in the column will be lost.
  - You are about to drop the column `callId` on the `call_participants` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `call_participants` table. All the data in the column will be lost.
  - You are about to drop the column `joinedAt` on the `call_participants` table. All the data in the column will be lost.
  - You are about to drop the column `leftAt` on the `call_participants` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `call_participants` table. All the data in the column will be lost.
  - You are about to drop the column `conversationId` on the `calls` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `calls` table. All the data in the column will be lost.
  - You are about to drop the column `endedAt` on the `calls` table. All the data in the column will be lost.
  - You are about to drop the column `initiatorId` on the `calls` table. All the data in the column will be lost.
  - You are about to drop the column `roomId` on the `calls` table. All the data in the column will be lost.
  - You are about to drop the column `startedAt` on the `calls` table. All the data in the column will be lost.
  - You are about to drop the column `conversationId` on the `conversation_members` table. All the data in the column will be lost.
  - You are about to drop the column `isMuted` on the `conversation_members` table. All the data in the column will be lost.
  - You are about to drop the column `joinedAt` on the `conversation_members` table. All the data in the column will be lost.
  - You are about to drop the column `lastReadMessageId` on the `conversation_members` table. All the data in the column will be lost.
  - You are about to drop the column `unreadCount` on the `conversation_members` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `conversation_members` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `conversations` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `conversations` table. All the data in the column will be lost.
  - You are about to drop the column `lastMessageAt` on the `conversations` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `conversations` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `friend_requests` table. All the data in the column will be lost.
  - You are about to drop the column `receiverId` on the `friend_requests` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `friend_requests` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `friend_requests` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `friends` table. All the data in the column will be lost.
  - You are about to drop the column `friendId` on the `friends` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `friends` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `message_attachments` table. All the data in the column will be lost.
  - You are about to drop the column `fileName` on the `message_attachments` table. All the data in the column will be lost.
  - You are about to drop the column `fileSize` on the `message_attachments` table. All the data in the column will be lost.
  - You are about to drop the column `messageId` on the `message_attachments` table. All the data in the column will be lost.
  - You are about to drop the column `mimeType` on the `message_attachments` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnailUrl` on the `message_attachments` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `message_reactions` table. All the data in the column will be lost.
  - You are about to drop the column `messageId` on the `message_reactions` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `message_reactions` table. All the data in the column will be lost.
  - You are about to drop the column `messageId` on the `message_reads` table. All the data in the column will be lost.
  - You are about to drop the column `readAt` on the `message_reads` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `message_reads` table. All the data in the column will be lost.
  - You are about to drop the column `conversationId` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `editedAt` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `isEdited` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `replyToId` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `displayName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `isOnline` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastSeen` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `passwordHash` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[blocker_id,blocked_id]` on the table `blocked_users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[conversation_id,user_id]` on the table `conversation_members` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sender_id,receiver_id]` on the table `friend_requests` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,friend_id]` on the table `friends` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[message_id,user_id,emoji]` on the table `message_reactions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[message_id,user_id]` on the table `message_reads` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone_number]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `blocked_id` to the `blocked_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blocker_id` to the `blocked_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `call_id` to the `call_participants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `call_participants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conversation_id` to the `calls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initiator_id` to the `calls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conversation_id` to the `conversation_members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `conversation_members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `conversations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiver_id` to the `friend_requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender_id` to the `friend_requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `friend_requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `friend_id` to the `friends` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `friends` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message_id` to the `message_attachments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message_id` to the `message_reactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `message_reactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message_id` to the `message_reads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `message_reads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conversation_id` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender_id` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `display_name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_hash` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."blocked_users" DROP CONSTRAINT "blocked_users_blockedId_fkey";

-- DropForeignKey
ALTER TABLE "public"."blocked_users" DROP CONSTRAINT "blocked_users_blockerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."call_participants" DROP CONSTRAINT "call_participants_callId_fkey";

-- DropForeignKey
ALTER TABLE "public"."call_participants" DROP CONSTRAINT "call_participants_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."calls" DROP CONSTRAINT "calls_conversationId_fkey";

-- DropForeignKey
ALTER TABLE "public"."calls" DROP CONSTRAINT "calls_initiatorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."conversation_members" DROP CONSTRAINT "conversation_members_conversationId_fkey";

-- DropForeignKey
ALTER TABLE "public"."conversation_members" DROP CONSTRAINT "conversation_members_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."friend_requests" DROP CONSTRAINT "friend_requests_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "public"."friend_requests" DROP CONSTRAINT "friend_requests_senderId_fkey";

-- DropForeignKey
ALTER TABLE "public"."friends" DROP CONSTRAINT "friends_friendId_fkey";

-- DropForeignKey
ALTER TABLE "public"."friends" DROP CONSTRAINT "friends_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."message_attachments" DROP CONSTRAINT "message_attachments_messageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."message_reactions" DROP CONSTRAINT "message_reactions_messageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."message_reactions" DROP CONSTRAINT "message_reactions_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."message_reads" DROP CONSTRAINT "message_reads_messageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."messages" DROP CONSTRAINT "messages_conversationId_fkey";

-- DropForeignKey
ALTER TABLE "public"."messages" DROP CONSTRAINT "messages_replyToId_fkey";

-- DropForeignKey
ALTER TABLE "public"."messages" DROP CONSTRAINT "messages_senderId_fkey";

-- DropIndex
DROP INDEX "public"."blocked_users_blockedId_idx";

-- DropIndex
DROP INDEX "public"."blocked_users_blockerId_blockedId_key";

-- DropIndex
DROP INDEX "public"."blocked_users_blockerId_idx";

-- DropIndex
DROP INDEX "public"."call_participants_callId_idx";

-- DropIndex
DROP INDEX "public"."call_participants_userId_idx";

-- DropIndex
DROP INDEX "public"."calls_conversationId_idx";

-- DropIndex
DROP INDEX "public"."calls_createdAt_idx";

-- DropIndex
DROP INDEX "public"."calls_initiatorId_idx";

-- DropIndex
DROP INDEX "public"."conversation_members_conversationId_idx";

-- DropIndex
DROP INDEX "public"."conversation_members_conversationId_userId_key";

-- DropIndex
DROP INDEX "public"."conversation_members_isMuted_idx";

-- DropIndex
DROP INDEX "public"."conversation_members_userId_idx";

-- DropIndex
DROP INDEX "public"."conversations_lastMessageAt_idx";

-- DropIndex
DROP INDEX "public"."friend_requests_receiverId_status_idx";

-- DropIndex
DROP INDEX "public"."friend_requests_senderId_idx";

-- DropIndex
DROP INDEX "public"."friend_requests_senderId_receiverId_key";

-- DropIndex
DROP INDEX "public"."friends_friendId_idx";

-- DropIndex
DROP INDEX "public"."friends_userId_friendId_key";

-- DropIndex
DROP INDEX "public"."friends_userId_idx";

-- DropIndex
DROP INDEX "public"."message_attachments_messageId_idx";

-- DropIndex
DROP INDEX "public"."message_reactions_messageId_idx";

-- DropIndex
DROP INDEX "public"."message_reactions_messageId_userId_emoji_key";

-- DropIndex
DROP INDEX "public"."message_reads_messageId_idx";

-- DropIndex
DROP INDEX "public"."message_reads_messageId_userId_key";

-- DropIndex
DROP INDEX "public"."message_reads_userId_idx";

-- DropIndex
DROP INDEX "public"."messages_conversationId_createdAt_idx";

-- DropIndex
DROP INDEX "public"."messages_senderId_idx";

-- DropIndex
DROP INDEX "public"."users_isOnline_idx";

-- DropIndex
DROP INDEX "public"."users_phoneNumber_key";

-- AlterTable
ALTER TABLE "blocked_users" DROP COLUMN "blockedId",
DROP COLUMN "blockerId",
DROP COLUMN "createdAt",
ADD COLUMN     "blocked_id" TEXT NOT NULL,
ADD COLUMN     "blocker_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "call_participants" DROP COLUMN "callId",
DROP COLUMN "createdAt",
DROP COLUMN "joinedAt",
DROP COLUMN "leftAt",
DROP COLUMN "userId",
ADD COLUMN     "call_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "joined_at" TIMESTAMP(3),
ADD COLUMN     "left_at" TIMESTAMP(3),
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "calls" DROP COLUMN "conversationId",
DROP COLUMN "createdAt",
DROP COLUMN "endedAt",
DROP COLUMN "initiatorId",
DROP COLUMN "roomId",
DROP COLUMN "startedAt",
ADD COLUMN     "conversation_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "ended_at" TIMESTAMP(3),
ADD COLUMN     "initiator_id" TEXT NOT NULL,
ADD COLUMN     "room_id" TEXT,
ADD COLUMN     "started_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "conversation_members" DROP COLUMN "conversationId",
DROP COLUMN "isMuted",
DROP COLUMN "joinedAt",
DROP COLUMN "lastReadMessageId",
DROP COLUMN "unreadCount",
DROP COLUMN "userId",
ADD COLUMN     "conversation_id" TEXT NOT NULL,
ADD COLUMN     "is_muted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "last_read_message_id" TEXT,
ADD COLUMN     "unread_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "conversations" DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "lastMessageAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT,
ADD COLUMN     "last_message_at" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "friend_requests" DROP COLUMN "createdAt",
DROP COLUMN "receiverId",
DROP COLUMN "senderId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "receiver_id" TEXT NOT NULL,
ADD COLUMN     "sender_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "friends" DROP COLUMN "createdAt",
DROP COLUMN "friendId",
DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "friend_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "message_attachments" DROP COLUMN "createdAt",
DROP COLUMN "fileName",
DROP COLUMN "fileSize",
DROP COLUMN "messageId",
DROP COLUMN "mimeType",
DROP COLUMN "thumbnailUrl",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "file_name" TEXT,
ADD COLUMN     "file_size" INTEGER,
ADD COLUMN     "message_id" TEXT NOT NULL,
ADD COLUMN     "mime_type" TEXT,
ADD COLUMN     "thumbnail_url" TEXT;

-- AlterTable
ALTER TABLE "message_reactions" DROP COLUMN "createdAt",
DROP COLUMN "messageId",
DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "message_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "message_reads" DROP COLUMN "messageId",
DROP COLUMN "readAt",
DROP COLUMN "userId",
ADD COLUMN     "message_id" TEXT NOT NULL,
ADD COLUMN     "read_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "messages" DROP COLUMN "conversationId",
DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "editedAt",
DROP COLUMN "isDeleted",
DROP COLUMN "isEdited",
DROP COLUMN "replyToId",
DROP COLUMN "senderId",
DROP COLUMN "updatedAt",
ADD COLUMN     "conversation_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "edited_at" TIMESTAMP(3),
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_edited" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "reply_to_id" TEXT,
ADD COLUMN     "sender_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt",
DROP COLUMN "displayName",
DROP COLUMN "isOnline",
DROP COLUMN "lastSeen",
DROP COLUMN "passwordHash",
DROP COLUMN "phoneNumber",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "display_name" TEXT NOT NULL,
ADD COLUMN     "is_online" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "last_seen" TIMESTAMP(3),
ADD COLUMN     "password_hash" TEXT NOT NULL,
ADD COLUMN     "phone_number" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "blocked_users_blocker_id_idx" ON "blocked_users"("blocker_id");

-- CreateIndex
CREATE INDEX "blocked_users_blocked_id_idx" ON "blocked_users"("blocked_id");

-- CreateIndex
CREATE UNIQUE INDEX "blocked_users_blocker_id_blocked_id_key" ON "blocked_users"("blocker_id", "blocked_id");

-- CreateIndex
CREATE INDEX "call_participants_call_id_idx" ON "call_participants"("call_id");

-- CreateIndex
CREATE INDEX "call_participants_user_id_idx" ON "call_participants"("user_id");

-- CreateIndex
CREATE INDEX "calls_conversation_id_idx" ON "calls"("conversation_id");

-- CreateIndex
CREATE INDEX "calls_initiator_id_idx" ON "calls"("initiator_id");

-- CreateIndex
CREATE INDEX "calls_created_at_idx" ON "calls"("created_at");

-- CreateIndex
CREATE INDEX "conversation_members_user_id_idx" ON "conversation_members"("user_id");

-- CreateIndex
CREATE INDEX "conversation_members_conversation_id_idx" ON "conversation_members"("conversation_id");

-- CreateIndex
CREATE INDEX "conversation_members_is_muted_idx" ON "conversation_members"("is_muted");

-- CreateIndex
CREATE UNIQUE INDEX "conversation_members_conversation_id_user_id_key" ON "conversation_members"("conversation_id", "user_id");

-- CreateIndex
CREATE INDEX "conversations_last_message_at_idx" ON "conversations"("last_message_at");

-- CreateIndex
CREATE INDEX "friend_requests_receiver_id_status_idx" ON "friend_requests"("receiver_id", "status");

-- CreateIndex
CREATE INDEX "friend_requests_sender_id_idx" ON "friend_requests"("sender_id");

-- CreateIndex
CREATE UNIQUE INDEX "friend_requests_sender_id_receiver_id_key" ON "friend_requests"("sender_id", "receiver_id");

-- CreateIndex
CREATE INDEX "friends_user_id_idx" ON "friends"("user_id");

-- CreateIndex
CREATE INDEX "friends_friend_id_idx" ON "friends"("friend_id");

-- CreateIndex
CREATE UNIQUE INDEX "friends_user_id_friend_id_key" ON "friends"("user_id", "friend_id");

-- CreateIndex
CREATE INDEX "message_attachments_message_id_idx" ON "message_attachments"("message_id");

-- CreateIndex
CREATE INDEX "message_reactions_message_id_idx" ON "message_reactions"("message_id");

-- CreateIndex
CREATE UNIQUE INDEX "message_reactions_message_id_user_id_emoji_key" ON "message_reactions"("message_id", "user_id", "emoji");

-- CreateIndex
CREATE INDEX "message_reads_message_id_idx" ON "message_reads"("message_id");

-- CreateIndex
CREATE INDEX "message_reads_user_id_idx" ON "message_reads"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "message_reads_message_id_user_id_key" ON "message_reads"("message_id", "user_id");

-- CreateIndex
CREATE INDEX "messages_conversation_id_created_at_idx" ON "messages"("conversation_id", "created_at");

-- CreateIndex
CREATE INDEX "messages_sender_id_idx" ON "messages"("sender_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_number_key" ON "users"("phone_number");

-- CreateIndex
CREATE INDEX "users_is_online_idx" ON "users"("is_online");

-- AddForeignKey
ALTER TABLE "friend_requests" ADD CONSTRAINT "friend_requests_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friend_requests" ADD CONSTRAINT "friend_requests_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friends" ADD CONSTRAINT "friends_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friends" ADD CONSTRAINT "friends_friend_id_fkey" FOREIGN KEY ("friend_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blocked_users" ADD CONSTRAINT "blocked_users_blocker_id_fkey" FOREIGN KEY ("blocker_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blocked_users" ADD CONSTRAINT "blocked_users_blocked_id_fkey" FOREIGN KEY ("blocked_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversation_members" ADD CONSTRAINT "conversation_members_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversation_members" ADD CONSTRAINT "conversation_members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_reply_to_id_fkey" FOREIGN KEY ("reply_to_id") REFERENCES "messages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_attachments" ADD CONSTRAINT "message_attachments_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_reactions" ADD CONSTRAINT "message_reactions_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_reactions" ADD CONSTRAINT "message_reactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_reads" ADD CONSTRAINT "message_reads_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calls" ADD CONSTRAINT "calls_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calls" ADD CONSTRAINT "calls_initiator_id_fkey" FOREIGN KEY ("initiator_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "call_participants" ADD CONSTRAINT "call_participants_call_id_fkey" FOREIGN KEY ("call_id") REFERENCES "calls"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "call_participants" ADD CONSTRAINT "call_participants_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
