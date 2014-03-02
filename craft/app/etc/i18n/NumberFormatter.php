<?php
namespace Craft;

/**
 * Craft by Pixel & Tonic
 *
 * @package   Craft
 * @author    Pixel & Tonic, Inc.
 * @copyright Copyright (c) 2014, Pixel & Tonic, Inc.
 * @license   http://buildwithcraft.com/license Craft License Agreement
 * @link      http://buildwithcraft.com
 */

/**
 * Number formatter class
 */
class NumberFormatter extends \CNumberFormatter
{
	/**
	 * Formats a number using the decimal format defined in the locale.
	 *
	 * @param mixed $value
	 * @param bool  $withGroupSymbol
	 * @return string
	 */
	public function formatDecimal($value, $withGroupSymbol = true)
	{
		$result = parent::formatDecimal($value);

		if (!$withGroupSymbol)
		{
			$result = str_replace($this->_locale->getNumberSymbol('group'), '', $result);
		}

		return $result;
	}
}
