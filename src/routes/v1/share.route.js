const express = require('express');

const router = express.Router();
const shareController = require('../../controllers/share.controller');

router.route('/:videoId').get(shareController.getHTMLMetatags);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Share
 *   description: Render server side data for video
 */

/**
 * @swagger
 * /share/{videoID}:
 *   get:
 *     summary: Get a video and return HTML with video data
 *     description: Allows Facebook, Twitter and the other scrapper to be able to retrieve metatags
 *     tags: [Share]
 *     parameters:
 *       - in: path
 *         name: videoID
 *         required: true
 *         schema:
 *           type: string
 *         description: Video id
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [horizontal, vertical]
 *         description: User name
 *       - in: query
 *         name: channelID
 *         schema:
 *           type: string
 *         description: Channel ID of App
 *     responses:
 *       "200":
 *         description: OK
 */
