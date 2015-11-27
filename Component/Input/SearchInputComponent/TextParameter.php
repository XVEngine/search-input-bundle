<?php

namespace XVEngine\Bundle\SearchInputBundle\Component\Input\SearchInputComponent;


/**
 * Class SelectParameter
 * @author Krzysztof Bednarczyk
 * @package XVEngine\Bundle\SearchInputBundle\Component\Input\SearchInputComponent
 */
class TextParameter extends AbstractParameter
{


    /**
     * @var string[]
     */
    protected $values = [];

    /**
     * @author Krzysztof Bednarczyk
     * @return string
     */
    function getType()
    {
        return null;
    }

    /**
     * Get values value
     * @author Krzysztof Bednarczyk
     * @return \string[]
     */
    public function getValues()
    {
        return $this->values;
    }

    /**
     * Set values value
     * @author Krzysztof Bednarczyk
     * @param \string[] $values
     * @return  $this
     */
    public function setValues($values)
    {
        $this->values = $values;
        return $this;
    }

    function jsonSerialize()
    {
        $arr = parent::jsonSerialize(); // TODO: Change the autogenerated stub
        $arr['values'] = $this->getValues();

        return $arr;
    }


}