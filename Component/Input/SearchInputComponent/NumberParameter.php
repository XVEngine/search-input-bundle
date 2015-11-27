<?php

namespace XVEngine\Bundle\SearchInputBundle\Component\Input\SearchInputComponent;


/**
 * Class NumberParameter
 * @author Krzysztof Bednarczyk
 * @package XVEngine\Bundle\SearchInputBundle\Component\Input\SearchInputComponent
 */
class NumberParameter extends AbstractParameter
{


    /**
     * @var int|null
     */
    protected $min = null;

    /**
     * @var int|null
     */
    protected $max;

    /**
     * @author Krzysztof Bednarczyk
     * @return string
     */
    function getType()
    {
        return "number";
    }

    /**
     * Get min value
     * @author Krzysztof Bednarczyk
     * @return int|null
     */
    public function getMin()
    {
        return $this->min;
    }

    /**
     * Set min value
     * @author Krzysztof Bednarczyk
     * @param int|null $min
     * @return  $this
     */
    public function setMin($min)
    {
        $this->min = $min;
        return $this;
    }

    /**
     * Get max value
     * @author Krzysztof Bednarczyk
     * @return int|null
     */
    public function getMax()
    {
        return $this->max;
    }

    /**
     * Set max value
     * @author Krzysztof Bednarczyk
     * @param int|null $max
     * @return  $this
     */
    public function setMax($max)
    {
        $this->max = $max;
        return $this;
    }


    function jsonSerialize()
    {
        $arr = parent::jsonSerialize(); // TODO: Change the autogenerated stub
        $min = $this->getMin();
        $max = $this->getMax();

        !is_null($min) && ($arr['min'] = $min);
        !is_null($max) && ($arr['max'] = $max);


        return $arr;
    }


}