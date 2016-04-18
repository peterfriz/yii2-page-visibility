<?php

/**
 * @copyright Copyright &copy; Piet de Vries, pietdevries.nl, 2016
 * @package yii2-page-visibility
 * @version 1.0.0
 */

namespace peterfriz\pagevisibility;

/**
 * Asset bundle for the js Page Visibility plugin.
 *
 * @author Piet de Vries <friz@pietdevries.nl>
 * @since 1.0
 */
class PageVisibilityAsset extends \yii\web\AssetBundle
{

    /**
     * @inheritdoc
     */
    public $sourcePath = '@peterfriz/pagevisibility/assets';

    /**
     * @inheritdoc
     */
    public $js = [
        'js/page_visibility.js',
    ];

}