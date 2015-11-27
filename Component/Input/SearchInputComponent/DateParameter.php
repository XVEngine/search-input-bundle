<?php

namespace XVEngine\Bundle\SearchInputBundle\Component\Input\SearchInputComponent;

/**
 * Class DateParameter
 * @author Krzysztof Bednarczyk
 * @package XVEngine\Bundle\SearchInputBundle\Component\Input\SearchInputComponent
 */
class DateParameter extends AbstractParameter
{

    /**
     * @author Krzysztof Bednarczyk
     * @return string
     */
    function getType()
    {
        return "date";
    }

}