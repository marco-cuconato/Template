/* Created by: marco cuconato
   Created on: May 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Template/sw.js", {
    scope: "/Template/",
  })
}

/**
 * Input.
 */

